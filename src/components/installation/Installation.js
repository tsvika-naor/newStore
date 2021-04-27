import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const shop = "doritestingsstore1234";
const api_key = "a48a6d7c00205092222d76ab2652b00b";
const scopes = "read_orders,write_products";
const redirect_uri = "http://walla.co.il";
const nonce = "JsaDt32DS53A"
// const access_mode = "";

// Build install/approval URL to redirect to
const install_url = `http://mighty-savannah-05623.herokuapp.com/${shop}.myshopify.com/admin/oauth/authorize?client_id=${api_key}&scope=${scopes}&redirect_uri=${redirect_uri}&nonce=${nonce}`
// const install_url = `cors-anywhere.herokuapp.com/https://doritestingsstore1234.myshopify.com/admin/oauth/authorize?client_id=a48a6d7c00205092222d76ab2652b00b&scope=read_orders,write_products&redirect_uri=http://walla.co.il`

// Redirect
// header("Location: " . install_url);
const Installation = () => {
    const [btn, setBtn] = useState('');

    useEffect(() => {

        axios.get(install_url).then(ret => {
            console.log(ret)
            setBtn(ret.data)
        })
    }
    )

    return (<div>
        <h4>btn</h4>
    </div>)
}

export default Installation;