export const  getEmail= (email) => {
    let parts = email.split("@");
    let result = parts[0]
    result += "@";
    let domain = parts[1];
    result += domain.charAt(0);
    let dot = domain.indexOf(".");
    for(let i=1; i<dot; i++) {
        result += "*";
    }
    result += domain.substring(dot);

    return result;
}