import http from "@utils/request";


export const xq = (Id) => http({
    method: "post",
    url: "/BtCApi/Item/GetProduct",
    data: {
        Id: Id,
        // UserID: null,
        // Signid: null,
        // DeviceId: "289017af-e9cf-4810-9187-08c7c351fb5a",
        // PhoneVersion: null,
        // ClientType: 0,
        // ProvinceId: 9,
        // ClientVersion: "1.0.0.1"
    }
})
