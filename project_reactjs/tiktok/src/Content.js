import { useEffect, useState } from "react";

//Events: Add / remove event listener
//Observer pattern: Subscribe / unsubscribe
//Closure
//Timers: setInterval, setTimeout , clearTimeout, clearInterval
//useState
//Mounted / Unmounted
// === toán tử so sánh 
//Call API

/**
 * 1. Update DOM
 *   - F8 blog title
 * 2. Call API
 * 3. Listen DOM events
 *    - Scroll
 *    - Resize
 * 4. Cleanup
 *    - Remove listener/ Unsubscribe
 *    - Clear timer
 */

    //useEffect(calback, [deps])
    /**
     * Đối số thứ 1 là callback (bắt buộc)
     * Đối số thứ 2 là mảng deps
     */

    /**
     * 3 trường hợp: 
     * 1. useEffect(callback)
     * - Gọi callback mỗi khi component render
     * - Gọi callback sau khi component thêm element vào DOM
     * 2. useEffect(callback, [])
     * - Chỉ gọi callback 1 lần sau khi component mounted
     * 3. useEffect(callback, [deps])
     * - Callback sẽ được gọi lại mỗi khi deps thay đổi
     */

    //
    //1.Callback luôn được gọi sau khi component mounted
    //2. Cleanup function luôn được gọi trước khi component unmounted
    //3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

    //Cho phép chọn ảnh từ thư viện và hiển thị ảnh đó
function Content(){
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        //Cleanup function
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);

   const handelPreviewAvatar = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);

    setAvatar(file);
   }
    return (
        <div>
            <input 
            type="file"
            onChange={handelPreviewAvatar}
            />
          {avatar && (
            <img src={avatar.preview} alt="" width="80%" 
            />
          )}
        </div>
    )
}

export default Content;