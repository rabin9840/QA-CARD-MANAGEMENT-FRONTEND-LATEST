const handleErrors = (response: any, setErrorCallback: any) => {
    const data = response?.error?.data || response;

    if (!data) return;

    // -------------------------------
    // CASE 1: Format => errors: [{ property, message }]
    // -------------------------------
    if (Array.isArray(data.errors)) {
        const errorObject: any = {};
        data.errors.forEach((err: any) => {
            const key = err.property || err.path;
            const msg = err.message || err.msg;
            if (key) errorObject[key] = msg;
        });

        setErrorCallback(errorObject);
        return;
    }

    // -------------------------------
    // CASE 2: Format => error: [{ path, msg }]
    // -------------------------------
    if (Array.isArray(data.error)) {
        const errorObject: any = {};
        data.error.forEach((err: any) => {
            const key = err.path;
            const msg = err.msg;
            if (key) errorObject[key] = msg;
        });

        setErrorCallback(errorObject);
        return;
    }

    // -------------------------------
    // CASE 3: Simple message
    // -------------------------------
    if (data.message) {
        setErrorCallback({ general: data.message });
        return;
    }
};

export default handleErrors;
