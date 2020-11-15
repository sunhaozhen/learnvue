import axios from 'axios'


export function request(config){
	const instance =axios.create({
		method:'get',
		timeout:5000,
	})
	return instance(config)
}

