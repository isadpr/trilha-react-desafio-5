import axios from 'axios';


export const api  = axios.create({
    baseURL: 'https://clmsjbfiadhrqobqkbnr.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsbXNqYmZpYWRocnFvYnFrYm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NzQ3ODEsImV4cCI6MjAyODI1MDc4MX0.GC28xzKnFJHMwt3AoAYJvRqHFrOkU0yiqXrAPJ-UKGk",
        authorization: "Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsbXNqYmZpYWRocnFvYnFrYm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NzQ3ODEsImV4cCI6MjAyODI1MDc4MX0.GC28xzKnFJHMwt3AoAYJvRqHFrOkU0yiqXrAPJ-UKGk"
    }
})