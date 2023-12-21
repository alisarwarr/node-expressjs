const response = (data, res) => {
    try {
        if (data.code && data.code === 200) {
            return res
                .status(200)
                .json({ status: true, data: data.data, message: data.message });
        }
        if (!data.code)
            return res
                .status(400)
                .json({ status: false, errors: data.data, error: data.message });
        return res
            .status(data.code)
            .json({ status: data.status, errors: data.data, error: data.message });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            errors: "Server response error",
            error: error.message,
        });
    }
}

const responseFormat = (message, data = undefined, status = false, code = 400) => {
    return { status, message, data, code };
}

const controllerExecuation = async (fun, req, res) => {
    try {
        const ex = await fun(req);
        response(ex, res);
    }
    catch (error) {
        response(responseFormat(error.message, undefined, false, 500), res);
    }
}


module.exports = { response, responseFormat, controllerExecuation };