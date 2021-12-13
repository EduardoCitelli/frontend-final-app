export default interface BaseResponse<T> {
    message: string,
    error?: string,
    data?: T,
}