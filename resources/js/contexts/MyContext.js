import React, { createContext, Component } from "react";
import axios from 'axios';

export const MyContext = createContext();

const Axios = axios.create({
    baseURL: '/api/',
   });