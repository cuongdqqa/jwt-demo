const jwt = require('jsonwebtoken');

const SECRET_JWT = '!@#Cuong_Dang#@!';

const user = {
    username: 'dev1',
    role: 'developer'
}

const generateToken = async (data) => {
    const token = await jwt.sign({ data }, SECRET_JWT, {
        expiresIn: '1d',
    });
    if (!token) console.log('No token')
    console.log(token)

};

generateToken(user);

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiZGV2MSIsInJvbGUiOiJkZXZlbG9wZXIifSwiaWF0IjoxNTgxMDExOTU0LCJleHAiOjE1ODEwOTgzNTR9.Fyp5yDzg4Zzwi-H099nbph2Kw9GYSkSEZH_takslJ9Q'

const verifyToken = async (token) => {
    if (!token) console.log('No token')
    const decrypt = await jwt.verify(token, SECRET_JWT);
    console.log(decrypt)

};

verifyToken(token)