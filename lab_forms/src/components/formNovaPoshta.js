import { FormProvider, useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useSlotProps } from "@mui/base";
import { useState } from "react";
import Spot from "./spots";

const schema = yup.object().shape({
  sender: yup.string().required("Оберіть місто-відправник").label("Місто-відправник"),
  recipient: yup.string().required("Оберіть місто-одержувач").label("Місто-одержувач"),
  type: yup.string().required("Оберіть вид відправлення").label("Вид відправлення"),
  spots: yup.array().when("type", {
    is: "palette",
    then: yup.array().of(
      yup.object().shape({
        paletteType: yup.string().required("Оберіть тип палетів").test(
          'not-empty',
          'Оберіть тип палетів',
          (value) => value !== ""
        ).label("Тип палети"),
        cost: yup.string()
          .test(
            "if-positive",
            "Вкажіть число > 0",
            (value) => value > 0
          ).required("Вкажіть оголошену вартість").label("Вартість").typeError("Вкажіть оголошену вартість"),
        amount: yup.number().min(1, "Кількість не може бути < 1").required("Вкажіть кількість").label("Кількість").typeError("Вкажіть кількість"),

      })
    )
  }).when("type", {
    is: "load",
    then: yup.array().of(
      yup.object().shape({
        amount: yup.number().min(1, "Кількість не може бути < 1")
          .required("Вкажіть кількість").label("Кількість").typeError("Вкажіть кількість"),
        cost: yup.string()
          .test(
            "if-positive",
            "Вкажіть число > 0",
            (value) => value > 0
          ).required("Вкажіть оголошену вартість").label("Вартість").typeError("Вкажіть оголошену вартість"),
        weight: yup.string().test(
          "if-positive",
          "Вкажіть число > 0",
          (value) => value > 0
        ).required("Вкажіть вагу").label("Вага").typeError("Вкажіть вагу"),
        length: yup.string().test(
          "if-positive",
          "Довжина має бути >= 0",
          (value) => value > 0).required("Вкажіть довжину").label("Довжина").typeError("Вкажіть довжину"),
        width: yup.number().test("if-positive",
          "Ширина має бути >= 0",
          (value) => value > 0).required("Вкажіть ширину").label("Ширина").typeError("Вкажіть ширину"),
        height: yup.number().test("if-positive",
          "Висота має бути >= 0",
          (value) => value > 0).required("Вкажіть висоту").label("Висота").typeError("Вкажіть висоту"),
      })
    )
  }),
  packaging: yup.boolean().label("Тип пакування").default(false),
  packagingType: yup.string().when("packaging", {
    is: true,
    then: yup.string()
      .test(
        'not-empty',
        'Оберіть тип пакування',
        (value) => value !== ""
      ).required("Оберіть тип пакування")
  }),
  liftUp: yup.boolean().label("Підйом на поверх").default(false),
  liftUpFloors: yup.number().when("liftUp", {
    is: true,
    then: yup.number().min(1, "Номер поверху має бути > 1").max(150, "Введіть реальний номер поверху").typeError("Вкажіть номер поверху")
  }),
  lifUpElevator: yup.boolean().label("Ліфт").default(false),
  return: yup.boolean().label("Зворотня доставка").default(false),
  returnType: yup.string().when("return", {
    is: true,
    then: yup.string().required("Оберіть вид зворотньої доставки")
  })
});

const useYupValidationResolver = (schema) => {
  return async (data) => {
    try {
      await schema.validate(data, { abortEarly: false });
      return { values: data, errors: {} };
    } catch (e) {
      console.log({
        values: {},
        errors: e.inner.reduce((allErrors, currentError) => {
          return {
            ...allErrors,
            [currentError.path]: {
              type: currentError.type,
              message: currentError.message,
            },
          };
        }, {}),
      });

      return {
        values: {},
        errors: e.inner.reduce((allErrors, currentError) => {
          return {
            ...allErrors,
            [currentError.path]: {
              type: currentError.type,
              message: currentError.message,
            },
          };
        }, {}),
      };
    }
  };
};

export function FormNovaPoshta(props) {
  const resolver = useYupValidationResolver(schema);

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver });

  const { cities, palettes, typeSend, returnTypes } = props;

  const [isPackaging, setIsPackaging] = useState(false);
  const [isReturn, setIsReturn] = useState(false);
  const [count, setCount] = useState(0);
  const [type, setType] = useState("");
  const [spots, setSpots] = useState([]);
  const [isLiftUp, setIsLiftUp] = useState(false);

  const handleTypeChange = (e) => {
    setType(e.target.value);

    if (e.target.value === "load") {
      setSpots([{ count: 1, cost: 0, weight: 0, length: 0, width: 0, height: 0 }]);
    }
    else if (e.target.value === "palette") {
      setSpots([{ count: 1, cost: 0, paletteType: "" }]);
    }
    setCount(1);
  }

  const addSpot = (spot = {}) => {
    spot["type"] = type;
    setSpots([...spots, spot]);
    setCount(count + 1);
  }
  const removeSpot = (index) => {
    setSpots(spots.filter((_, i) => i !== index));
    setCount(count - 1);
  }

  const onSubmit = data => console.log(data);

  const onReset = () => {
    setType("");
    setSpots([]);
  }

  return (
    <Box>
      <FormProvider {...{ register, handleSubmit, errors }}>
        <form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
          <div>
            <select defaultValue="" id="sender" {...register("sender")}>
              <option value="" disabled hidden>Вибрати місто-відправник</option>
              {cities.map((city) => {
                return (<option value={city.city}>{city.city}</option>)
              })}
            </select>
            <span>{errors.sender?.message}</span>
          </div>

          <div>
            <select defaultValue="" id="recipient" {...register("recipient")} >
              <option value="" disabled hidden>Вибрати місто-одержувач</option>
              {cities.map((city) => {
                return (<option value={city.city}>{city.city}</option>)
              })}
            </select>
            <span>{errors.recipient?.message}</span>
          </div>

          <div>
            <label htmlFor="type">Вид відправлення</label>
            <select defaultValue="" id="type" {...register("type")} onChange={handleTypeChange}>
              <option value="" disabled hidden>Оберіть вид відправлення</option>
              {typeSend.map((typeS, index) => (
                <option key={index} value={typeS.value}>{typeS.lable}</option>
              ))}
            </select>
            <span>{errors.type?.message}</span>
          </div>

          {spots.length > 0 &&
            <div>
              {spots.map((spot, index) => (
                <Spot key={index} index={index} type={type} removeSpot={removeSpot} palettes={palettes} />
              ))}
              <button type="button" onClick={addSpot} disabled={spots.length === 2 ? true : false}>Додати місце</button>
            </div>
          }

          <div>
            <input id="packaging" type="checkbox" {...register('packaging')} onChange={() => setIsPackaging(!isPackaging)} />
            <label htmlFor="packaging">Пакування</label>
          </div>
          {isPackaging && (
            <>
              <div>
                <select defaultValue="" id="packagingType" {...register('packagingType')}>
                  <option value="" disabled hidden>Оберіть тип пакування</option>
                  {typeSend.map((typeS, index) => (
                    <option key={index} value={typeS.value}>{typeS.lable}</option>
                  ))}
                </select>
                <span>{errors.packagingType?.message}</span>
              </div>
              <span>Кількість: {count}</span>
            </>
          )}

          <div>
            <input id="return" type="checkbox" {...register('return')} onChange={() => setIsReturn(!isReturn)} />
            <label htmlFor="return">Повернення</label>
          </div>

          {isReturn &&
            <div>
              <label htmlFor="returnType">Тип повернення</label>
              <select defaultValue="" id="returnType" {...register('returnType')}>
                <option value="" disabled hidden>Оберіть тип повернення</option>
                {returnTypes.map((type, index) => (
                  <option key={index} value={type.returnType}>{type.returnType}</option>
                ))}
              </select>
              <span>{errors.returnType?.message}</span>
            </div>
          }

          <div>
            <input id="liftUp" type="checkbox" {...register('liftUp')} onChange={() => setIsLiftUp(!isLiftUp)} />
            <label htmlFor="liftUp">Підйом на поверх</label>
          </div>

          {isLiftUp && (
            <>
              <div>
                <label>Поверх</label>
                <input id="liftUpFloors" type="number" {...register('liftUpFloors')} />
                <span>{errors.liftUpFloors?.message}</span>
              </div>
              <div>
                <input id="liftUpElevator" type="checkbox" {...register('liftUpElevator')} />
                <label htmlFor="liftUpElevator">Ліфт</label>
              </div>
            </>
          )}

          <div>
            <input type="submit" />
            <input type="reset" />
          </div>
        </form>
      </FormProvider>
    </Box>
  );
}
