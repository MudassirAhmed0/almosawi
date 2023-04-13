import axios from "axios";

export default axios.create({
  baseURL: "https://api2.almoosawi.tv/api",

  headers: {
    Authorization: `bearer 04deeb8a77674167c28954518085b3c8a63e4d8ee1d9b7d8ff19bc0bcdbfabe2daa7ee42020a27f9cda756a0384b2a9acba8bf356615d5bf7631d94d38b40da21854162a2c78154df571071e86fc88de657d0c9a09fd2f9b0541eafa73a49cbcd9ccabe70b43fa033f0b7f323d2e5b562f03abb980b1ccfecfcf0e3f2fb197a2`,
  },
});
