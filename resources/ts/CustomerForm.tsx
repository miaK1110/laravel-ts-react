import { useFormik } from "formik";
import React from "react";
import { basicSchema } from "./schemas/index";

const CustomerForm = () => {
    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
        handleSubmit,
    } = useFormik<FormValueType>({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            selectFruits: "",
            checkAnimal: false,
            radioDogOrCat: "dog",
        },
        validationSchema: basicSchema,
        onSubmit: (values, actions) => {
            console.log(values);
            console.log(actions);
        },
    });

    type FormValueType = {
        email: string;
        name: string;
        password: string;
        confirmPassword: string;
        checkAnimal: boolean;
        radioDogOrCat: "dog" | "cat";
        selectFruits: string;
    };

    return (
        <form className="container w-50 mt-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    className={
                        errors.name && touched.name
                            ? "form-control is-invalid"
                            : "form-control"
                    }
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    name="email"
                    className={
                        errors.email && touched.email
                            ? "form-control is-invalid"
                            : "form-control"
                    }
                    aria-describedby="emailHelp"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                </div>
                {errors.email && touched.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    className={
                        errors.password && touched.password
                            ? "form-control is-invalid"
                            : "form-control"
                    }
                    id="exampleInputPassword1"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                )}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Confirm Password
                </label>
                <input
                    type="password"
                    name="confirmPassword"
                    className={
                        errors.confirmPassword && touched.confirmPassword
                            ? "form-control is-invalid"
                            : "form-control"
                    }
                    id="exampleInputPassword1"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                    <div className="invalid-feedback">
                        {errors.confirmPassword}
                    </div>
                )}
            </div>

            <div className="my-4 form-check">
                <input
                    type="checkbox"
                    name="checkAnimal"
                    onChange={handleChange}
                    className="form-check-input"
                    id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                    Do you like animals?
                </label>
            </div>

            <label className="form-check-label mb-2">
                What fruits do you like the best?
            </label>
            <select
                className="form-select"
                aria-label="Default select example"
                name="selectFruits"
                value={values.selectFruits}
                onChange={handleChange}
                onBlur={handleBlur}
            >
                <option>---</option>
                <option value="1">Bananas</option>
                <option value="2">Apples</option>
                <option value="3">Oranges</option>
                <option value="3">Grapes</option>
            </select>

            <label className="form-check-label">
                Are you a dog person or a cat person?
            </label>
            <div className="form-check mt-3">
                <input
                    className="form-check-input"
                    type="radio"
                    name="radioDogOrCat"
                    id="flexRadioDefault1"
                    value="dog"
                    onChange={handleChange}
                    checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    I like dogs &#128054;
                </label>
            </div>
            <div className="form-check mb-5">
                <input
                    className="form-check-input"
                    type="radio"
                    name="radioDogOrCat"
                    value="cat"
                    onChange={handleChange}
                    id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    I like cats &#128049;
                </label>
            </div>

            <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
            >
                Submit
            </button>
        </form>
    );
};

export default CustomerForm;
