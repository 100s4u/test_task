import axios from "axios";

export default class PostService{
    static async about(token) {
        const response = await fetch('http://test.flcd.ru/api/user/self', {
            method: 'GET',
            headers: {
                'accept': '*/*',
                'Authorization': 'Bearer '+token,
                'X-CSRF-TOKEN': '',
            }
        });
        return response.json()
    }
    static async getAll() {
        const response = await axios.get('http://test.flcd.ru/api/post');
        return response.data.reverse()
    }
    static async getOne(id) {
        const response = await axios.get('http://test.flcd.ru/api/post/'+id);
        return response.data
    }
    static async Edit(id, text, token) {
        await fetch('http://test.flcd.ru/api/post/'+id, {
            method: 'PATCH',
            headers: {
                'accept': '*/*',
                'Authorization': 'Bearer '+token,
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '',
            },
            body: JSON.stringify({
                text: text
            })
        });
    }
    static async Add(text, token) {
        await fetch('http://test.flcd.ru/api/post/', {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Authorization': 'Bearer '+token,
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '',
            },
            body: JSON.stringify({
                text: text
            })
        });
    }
    static async Del(id, token) {
        await fetch('http://test.flcd.ru/api/post/'+id, {
            method: 'DELETE',
            headers: {
                'accept': '*/*',
                'Authorization': 'Bearer '+token,
                'X-CSRF-TOKEN': '',
            }
        });
    }
    static async Login(email, pswd) {
        const response = await axios.post('http://test.flcd.ru/api/token', {email: email, password: pswd});
        return response.data
    }
    static async Reg(name, email, pswd, pswd_cf) {
        try{
            const response = await axios.post('http://test.flcd.ru/api/register', {name: name, email: email, password: pswd, password_confirmation: pswd_cf})
            return response.data
        }catch (error) {
            console.error(error);
          }
    }
}