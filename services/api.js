import axios from 'axios';

export const api = axios.create({
  baseURL: "https://sgvtorgyzkbolpnozrej.supabase.co/rest/v1/",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNndnRvcmd5emtib2xwbm96cmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTgwNTksImV4cCI6MjA2MzIzNDA1OX0.3x19eFeNNtA1Fu9eGvHEkDN7Hnl9k6QVEpG5m67cyG4", 
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNndnRvcmd5emtib2xwbm96cmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NTgwNTksImV4cCI6MjA2MzIzNDA1OX0.3x19eFeNNtA1Fu9eGvHEkDN7Hnl9k6QVEpG5m67cyG4",
  },
});