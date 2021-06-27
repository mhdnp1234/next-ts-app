import { BASIC_COLORS, COLOR_DATABASE } from "../constants/colorConstants"

const initialState = {
    basicColors: BASIC_COLORS,
    allColors: Object.keys(COLOR_DATABASE).reduce((acc, groupColor) => {
        acc = {...acc, [groupColor.toUpperCase()]: COLOR_DATABASE[groupColor].map(color => ({...color, group: groupColor.toUpperCase()}))}
        return acc
    }, {}),
    flatAllColours: Object.keys(COLOR_DATABASE).reduce((acc: any, groupColor) => {
        acc = [...acc, ...COLOR_DATABASE[groupColor].map(color => ({...color, group: groupColor.toUpperCase()}))]
        return acc
    }, []),

}
export default function (state = initialState,  action: any) {
    return state
}