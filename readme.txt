In this task I was asked to create a express server which will store the current date and Time obtained from user in a file called date.txt in Post request. The same will be
fetched from the file during the get request.

I have deployed this in Heroku.
https://raj-nodejs-filesystem.herokuapp.com/

Use the above link in postman to POST the time in the below format(Format not necessary to be same)
{
    "time":"30-05-2021 19:40 IST"
}

On sending this post request in return the follwing response will be returned
[
    {
        "message": "Data saved Successfully",
        "savedData": "30-05-2021 19:40 IST"
    }
]

If we refresh the heroku url the updated time will be fetched as api through get request. At the same time the data will be stored in date.txt also

I tried the same using HTTP.createServer too Just to check my understanding. I have commented the same.

Thanks and Regards,
Nagarajan C
