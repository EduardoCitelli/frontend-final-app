import BaseResponse from "../models/base-response";

export async function handleResponse(response: Response) {
    if (response.ok)
        return response.json();

    if (response.status >= 400) {
        const error = await response.json() as BaseResponse<any>;
        throw new Error(error.error);
    }

    throw new Error("Network response was not ok, try leater");
}

export function handleError(error: Error) {
    console.error("API call failed. " + error);

    alert(error);
}