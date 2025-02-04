// let a=10;
// let b=20;
// if(a<b)
// {
//     console.log("b is big");
// }
// else
// {
//     console.log("a is big");
// }

// let a=-10;
// if(a>=0)
// {
//     console.log("no is positive");
// }
// else
// {
//     console.log("no is negitive");
// }

let a=0;
if(a>=0)
{
    if(a==0)
    {
        console.log("no is zero");
    }
    else
    {
        console.log("no is positive");
    }
}
else
{
    console.log("no is negitive");
}



let unit=320;
let total,c;
if(unit<=100)
{
    total=50+(unit*0.60);
    console.log("\n amount is=",total);
}
else
{
    if(unit>100 && unit<300)
    {
        total=50+(unit*0.80);
        console.log("\n amount is=",total);
    }
    else
    {
        total=50+(unit*0.90);
        console.log("\n amount is=",total);
    }
}
if(total>=300)
{
    c=total*1.15;
    console.log("\n amount after 300 rupess up=",c);
}
