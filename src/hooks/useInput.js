import { useEffect, useState } from "react"
import { REGEX } from "../constants/regex";

export const useInput = (property) => {
    const [ value, setValue ] = useState();
    const [ message, setMessage ] = useState(null);

    useEffect(() => {        
        if(!value) {    //빈값이면 null
            setMessage(() => null);
            return;
        }

        // 정규식 확인
        const regexEntries = Object.entries(REGEX);

        for(let [k, v] of regexEntries) {
            if(property === k) {
                if (v.regexr.test(value)) {
                    setMessage(() => {
                        return {
                            type: "success",
                            text: ""
                        }
                    })
                }else{
                    setMessage(() => {
                        return {
                            type: "error",
                            text: v.text
                        }
                    })
                }
            }
        }
    }, [value])

    const handleOnChange = (e) => {
        setValue(() => e.target.value);
    }

    return [ value, handleOnChange, message, setValue, setMessage ];
}