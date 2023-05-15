import React from "react";
import { useFormik } from 'formik';
import { LoginSchema } from "../../../../utils/validation";

const LoginForm: React.FC = () => {

    const formik = useFormik({
        initialValues: {
            IdInstance: '',
            ApiTokenInstance: ''
        },
        initialStatus: false,
        validationSchema: LoginSchema,
        onSubmit: async (formData) => {
            console.log(formData);
        },
    });

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md mx-auto">
                <form 
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8" 
                    onSubmitCapture={formik.handleSubmit}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="IdInstance"
                        >
                            IdInstance:
                        </label>
                        <input
                            value={formik.values.IdInstance} 
                            onChange={formik.handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="IdInstance"
                            type="text"
                            placeholder="Введите IdInstance"
                        />
                        {formik.touched.IdInstance && formik.errors.IdInstance && (
                            <p className="text-red-500 mt-2">{formik.errors.IdInstance}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="ApiTokenInstance"
                        >
                            ApiTokenInstance:
                        </label>
                        <input
                            value={formik.values.ApiTokenInstance} 
                            onChange={formik.handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="ApiTokenInstance"
                            type="text"
                            placeholder="Введите ApiTokenInstance"
                        />
                        {formik.touched.ApiTokenInstance && formik.errors.ApiTokenInstance && (
                            <p className="text-red-500 mt-2">{formik.errors.ApiTokenInstance}</p>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
