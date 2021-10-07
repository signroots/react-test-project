

const validation = (values) => {

    let errors={};

    if(!values.fullname){
        errors.fullname="Name is required"
    }
    if(!values.email){
        errors.email="Email is required"
    }else if(!/\$+@\$+\.\$+/.test(values.email)){
        errors.email="Email is invalid"
    }
    if(!values.password){
        errors.password="password is required"
    }else if(values.password.length <6){
        errors.password="password must be more than six characters"
    }

    return errors;
}

export default validation
