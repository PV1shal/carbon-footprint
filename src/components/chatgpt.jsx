import { Configuration, OpenAIApi } from "openai";
const openaiApiKey = import.meta.env.VITE_KEY;
const questions = [
    {
        type:'radio',
        question:'Including yourself, how many people live in your household?',
        options:['1','2','3','4','5','6+']
    },
    {
        type:'radio',
        question:'Describe the house you live in?',
        options:
            ['Detached single family home',
            'Attached single family home',
            'Apartment Building (2 to 4 units)',
            'Apartment Building (5+ units)',
            'Mobile Home']
    },
    {
        type:'radio',
        question:'what is the size of your house?',
        options:
            ['Under 500 sq ft',
            '500-999',
            '1,000-1,499',
            '1,500-1,999',
            '2,000-2,499',
            '2,500-2,999',
            '3,000-3,999',
            'Over 4000'
        ]
    },
    {
        type:'radio',
        question:'Do you purchase clean energy such as wind or solar?',
        options:
            ['Yes, some',
            'Yes, most',
            'Yes, all',
            'No (US Average)',
            "I don't know"
        ]
    },
    {
        type:'radio',
        question:'Do you recycle items such as metal, plastic, glass, or paper?',
        options:
        ['Yes','No']
    },
    {
        type:'radio',
        question:'Your diet is mostly',
        options:
        ['Meat Lover',
        'Average omnivore (US Average)',
        'No beef',
        'Vegetarian',
        'Vegan']
    },
    {
        type:'check',
        question:'Do you make a conscious effort to save energy? Check all that apply.',
        options:[
        'I have a programmable thermostat',
        'I use ENERGY STAR appliances',
        'I use energy efficient lightbulbs',
        'I line dry my laundry'
    ]
    },
    {
        type:'radio',
        question:'Average total weekly travel by Bus/Subway/Metro',
        options:
        [
            '0 miles (US Average)',
            'Under 5 miles',
            'Under 5 to 9.9 miles',
            '10 to 14.9 miles',
            '15 to 19.9 miles',
            '20 to 29.9 miles',
            '30+ miles',
        ]
    },
    {
        type:'radio',
        question:'Average total weekly travel by Car',
        options:
        [
            '0 miles',
            'Under 1,000 miles',
            '1,000 to 2,499 miles',
            '2,500 to 4,999 miles',
            '5,000 to 9,999 miles',
            '10,000 to 14,999 miles (US Average)',
            '15,000 to 19,999 miles',
            '20,000 to 29,999 miles',
            '30,000+ miles',
        ]
    },
    {
        type:'radio',
        question:'Number of long round-trip flights (2500+ miles) I make in a year',
        options:
        [
            '0',
            '1',
            '2',
            '3',
            '4 to 9',
            '10 to 19',
            '20+'
        ]
    },
    {
        type:'radio',
        question:'Number of medium round-trip flights (300-2500 miles one way) I make in a year',
        options:
        [
            '0',
            '1',
            '2',
            '3',
            '4 to 9',
            '10 to 19',
            '20+'
        ]
    },
    {
        type:'radio',
        question:'Number of short round-trip flights (<300 miles one way) I make in a year',
        options:
        [
            '0',
            '1',
            '2',
            '3',
            '4 to 9',
            '10 to 19',
            '20+'
        ]
    },
    {
        type:'radio',
        question:'Average number of nights spent in a hotel per year',
        options:
        [
            '0',
            '1 to 2 Nights',
            '3-4 Nights',
            '5-6 Nights (US Average)',
            '1-2 Weeks',
            '3-4 Weeks',
            '1-2 Months'
        ]
    },
]

export const fetchRecommendation = async (key,prompt)=>{
let query = "for the questions:" + questions + "and the following answers :" + prompt + ',give five recommendations on how reduce carbon footprint in number format ';
const configuration = new Configuration({
    apiKey: key,
});
const openai = new OpenAIApi(configuration);
const chat_completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: query }],
});
 return chat_completion.data.choices[0].message.content

}
