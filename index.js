import express from "express";
//  =const express = require("express");

const app = express();

const PORT = 4000;

// This is arrow function
const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send('Hello from home :)');

const handleProfile = (req, res) => res.send("You are on my profile");

// middleware needs 'next'
const betweenHome = (req, res, next) => {
  console.log("Between");
  next();
};

// middleware's order is important

app.use(betweenHome);   // This is 전역

app.get("/", handleHome);

//  This is 부분적용
//  => app.get("/", betweenHome, handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);