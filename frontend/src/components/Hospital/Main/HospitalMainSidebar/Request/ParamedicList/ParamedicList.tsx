import ParamedicDetail from "../ParamedicDetail/ParamedicDetail";
import ParamedicListItem from "../ParamedicItem/ParamedicListItem";
import { ParamedicListContainer } from "./ParamedicList.style";
import { useRecoilState, useRecoilValue } from "recoil";
import { hospitalRequestList, hospitalSelectedParaId } from "../../../../../../recoils/HospitalAtoms";
import { useEffect } from "react";
import { ParaRequestItem } from "/src/types/map";

const ParamedicList = () => {
    const [paraItem, setParaItem] = useRecoilState(hospitalSelectedParaId);
    const requestList = useRecoilValue(hospitalRequestList);

    const selectParaDetail = (item: ParaRequestItem | undefined) => {
        setParaItem(item);
    }

    useEffect(() => {
        console.log(requestList)
      }, [requestList])

    return (
        <>
            <ParamedicListContainer>
                {requestList !== undefined ?
                    <>
                        {requestList.map((item, index) => (
                            <ParamedicListItem {...item} key={index}
                                onclick={() => selectParaDetail(item)}
                                isSelected={(paraItem !== undefined && paraItem.id == item.id)}
                            />
                        ))}
                    </> :
                    <></>
                }
            </ParamedicListContainer>
            {paraItem !== undefined ? <ParamedicDetail {...paraItem} onclick={() => selectParaDetail(undefined)}></ParamedicDetail>
                :
                <></>}
        </>
    );
};

export default ParamedicList;