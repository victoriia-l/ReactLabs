import { useFormContext } from "react-hook-form";

export default function Spot(props) {
    const { register, errors } = useFormContext();
    const { index, type, removeSpot, palettes } = props;

    return (
        <div>

            {type === "palette" && (
                <>
                    <div>
                        <label>Тип палети </label>
                        <select defaultValue="" id={`spots[${index}].paletteType`} {...register(`spots[${index}].paletteType`)}>
                            <option value="" disabled hidden>Оберіть тип палетів</option>
                            {palettes.map(palette => <option key={palette.id} value={palette.value}>{palette.label}</option>)}
                        </select>
                        <span>{errors[`spots[${index}].paletteType`]?.message}</span>
                    </div>

                    <div>
                        <label>Оголошена вартість </label>
                        <input id={`spots[${index}].cost`} {...register(`spots[${index}].cost`)} /> грн
                        <span>{errors[`spots[${index}].cost`]?.message}</span>
                    </div>

                    <div>
                        <label>Кількість </label>
                        <input type="number" id={`spots[${index}].amount`} {...register(`spots[${index}].amount`)} />
                        <span>{errors[`spots[${index}].amount`]?.message}</span>
                    </div>
                </>
            )}

            {type === "load" && (
                <>
                    <div>
                        <label>Кількість </label>
                        <input type="number" id={`spots[${index}].amount`} {...register(`spots[${index}].amount`)} />
                        <span>{errors[`spots[${index}].amount`]?.message}</span>
                    </div>

                    <div>
                        <label>Оголошена вартість </label>
                        <input id={`spots[${index}].cost`} {...register(`spots[${index}].cost`)} /> грн
                        <span>{errors[`spots[${index}].cost`]?.message}</span>
                    </div>

                    <div>
                        <label>Вага </label>
                        <input id={`spots[${index}].weight`} {...register(`spots[${index}].weight`)}/> кг
                        <span>{errors[`spots[${index}].weight`]?.message}</span>
                    </div>

                    <div>
                        <label>Довжина </label>
                        <input id={`spots[${index}].length`} {...register(`spots[${index}].length`)}/> см
                        <span>{errors[`spots[${index}].length`]?.message}</span>
                    </div>

                    <div>
                        <label>Ширина </label>
                        <input id={`spots[${index}].width`} {...register(`spots[${index}].width`)}/> см
                        <span>{errors[`spots[${index}].width`]?.message}</span>
                    </div>

                    <div>
                        <label>Висота </label>
                        <input id={`spots[${index}].height`} {...register(`spots[${index}].height`)}/> см
                        <span>{errors[`spots[${index}].height`]?.message}</span>
                    </div>
                </>
            )}
            {index > 0 && (<button onClick={() => removeSpot(index)}>Прибрати місце</button>)}
        </div>
    )
}