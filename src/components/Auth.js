//import { useState } from "react";
import { Formik , Form , Field,ErrorMessage } from "formik";
import * as Yup from "yup";

const Auth = ()=>{

    const validationSchema= Yup.object(
        {
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Write in right format").required("Email is neccesory to fill"),
            password: Yup.string().min(5,"password should be of minimum 6 characters").required("Password is neccesory to fill"),
        }
    );

    return (<>
    <div>
    <h1>Hello this is login page and its in progress...</h1>
    </div>
    <div>
        <Formik
        initialValues={{name:"" , email:"" , password:""}}
         validationSchema={validationSchema}
        onSubmit={async(values)=>{
            await new Promise((resolve)=>setTimeout(resolve , 200));
            alert(JSON.stringify(values , null , 2));
        }}
        >
        <Form>
            <div>
                <label htmlFor="name">Name :-</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" />
            </div>
            <div>
                <label htmlFor="email">Email:-</label>
                <Field type="email" id="email" name="email"/>
                <ErrorMessage name ="email" component="div"/>
            </div>
            <div>
                <label htmlFor="password">Password :-</label>
                <Field type="password" id="password" name="password"/>
                <ErrorMessage name="password" component="div"/>
            </div>
            <button type="submit">Submit</button>
        </Form>

        </Formik>
        
    </div>
    </>
    );
};

export default Auth;

//await new Promise((resolve) => setTimeout(resolve, 200));
//   alert(JSON.stringify(values, null, 3));