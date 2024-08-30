import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom/client' // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
            <h2>Chúc mừng bạn đã tạo thành công ứng dụng React đầu tiên!</h2>
            <p>Đây là ứng dụng React đầu tiên của tôi!</p>
            <p>Chúc mừng bạn đã tạo thành công ứng dụng React đầu tiên!</p>
        </div>
    )
}

// Render component App vào #root element

//React@17
//ReactDOM.render(<App />, document.getElementById('root'))

//React@18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);