import React from "react";
// import { NumericFormat }   from "react-number-format";

// // import { TextFieldProps } from "../TextField";
import TextField from "../TextField";

import classNames from "classnames";

type Variant = "phone" | "phonePrivate" | "ssn" | "money" | "date";

interface VariantProps {
  mask?: string;
  prefix?: string;
  thousandSeparator?: string;
}

// type VariantList = Record<Variant, VariantProps>;

// export interface Props {
//   variant?: Variant;
//   noBottomMargin?: boolean;
//   placeholder?: string;
//   leadingIcon?: React.ReactElement | false;
// }

// const variantList: VariantList = {
//   phone: { mask: "(###) ###-####" },
//   phonePrivate: { mask: "(***) ***-####" },
//   ssn: { mask: "### ## ####" },
//   money: { prefix: "$", thousandSeparator: "," },
//   date: { mask: "##/##/####" }
// };

// const MaskedTextField: React.FC<Props: props> = props => {
//   const {
//     id,
//     className,
//     defaultValue,
//     name,
//     onChange = () => {
//       /* empty */
//     },
//     onBlur = () => {
//       /* empty */
//     },
//     autoFocus,
//     disabled,
//     value,
//     variant = "phone",
//     required,
//     helperText,
//     inputRef,
//     noBottomMargin,
//     placeholder,
//     leadingIcon = false,
//     hasError = false,
//     readOnly = false
//   } = props;

//   const currentVariant = variantList[variant];

//   // when variant is phonePrivate, trim given phone number value so that the value is only the last 4 digits
//   const cleanValue =
//     variant === "phonePrivate" ? value.substring(value.length - 4) : value;

//   return (
//     <NumberFormat
//       className={classNames({
//         [className]: className
//       })}
//       format={currentVariant.mask}
//       prefix={currentVariant.prefix}
//       thousandSeparator={currentVariant.thousandSeparator}
//       value={cleanValue}
//       defaultValue={defaultValue}
//       onChange={onChange}
//       onBlur={onBlur}
//       name={name}
//       customInput={TextField}
//       required={required}
//       id={id}
//       disabled={disabled}
//       inputRef={inputRef}
//       helperText={helperText}
//       autoFocus={autoFocus}
//       noBottomMargin={noBottomMargin}
//       placeholder={placeholder}
//       leadingIcon={leadingIcon}
//       hasError={hasError}
//       readOnly={readOnly}
//     />
//   );
// };

export default MaskedTextField;
