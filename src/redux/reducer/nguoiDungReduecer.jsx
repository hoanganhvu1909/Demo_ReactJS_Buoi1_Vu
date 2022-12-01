/**
 Đối với dữ liệu của redux làm sao biết nó có thay đổi hay khônn thay đổi. Nó sử dụng slow compare(so sánh dựa trên những giá trị nguyên thuỷ).Đối với primitive value(string, number, boolean...) thì máy tính có thể hiểu. Còn đối với object, array là Reference value thì state lưu địa chị. Nên nó sẽ không có sự thay đổi. Do nó không có sự thay đổi nên nó sẽ không render ra giao diện.
 */
// Lưu ý: Đối với reference value (object, array) thì khi cập nhật state trên redux cần clone giá trị ra object hoặc array mới khi return về giá trị mới đó


const stateDefault = [
{taiKhoan:'Anh Vũ', matKhau:'123'},
{taiKhoan:'Vũ Anh', matKhau:'109'}
]


export const arrNguoiDungReducer = (state = stateDefault, action)=>{
    switch (action.type) {
        case 'THEM_NGUOI_DUNG':{
            state.push(action.payload)
            return [...state] // immutable: tính chất bất biến của redux

        }
        default: return state;
    }
}