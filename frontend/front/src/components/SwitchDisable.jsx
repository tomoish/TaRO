import { ManageDisplyButton } from "../Unity/ManageDisplayButton";
import { useState, useEffect } from "react";

export const SwitchDisable = () => {
    const [disable, setDisable] = useState(true);
    const [disableStyle, setDisableStyle] = useState({ opacity: 0.6 })
    useEffect(() => {
        console.log("page settings")
    }, [])
    const startTime = ManageDisplyButton().startTime;
    const interval = Number(ManageDisplyButton().interval);
    useEffect(() => {
        if (startTime !== "") {
            console.log("statTime change")
            setTimeout(() => {
                setDisable(false)
                setDisableStyle({ opacity: 1 })
                console.log("disable false")
            }, interval)
        }
    }, [startTime])
    return ({
        disable: disable,
        disableStyle: disableStyle
    })
}