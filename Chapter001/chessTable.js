let size = 10;

for (let i = 0; i < size; i++)
{
    let separator = i % 2 === 0 ? '#' : ' ';
    let template = i % 2 === 0 ? ' ' : '#';
    let res = '';

    for (let j = 0; j < size; j++)
    {
        res += j % 2 === 0 ? template : separator;
    }

    console.log(res);
}