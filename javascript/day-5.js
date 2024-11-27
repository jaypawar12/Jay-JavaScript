/*
    Nested Statement :  if(condition)
                        { 
                            if(condition)
                            {
                                ...statement
                            } 
                            else
                            {
                                ...statement
                            }     
                        }
                        else
                        {
                            ...statement
                        }

    Ladder Statement :  if(condition)
                        { 
                            ...statement
                        }
                        else if(condition)
                        {
                            ...statement
                        }   
                        else
                        {
                            ...statement
                        }                    
*/

// Nested Statement => Find Larger Number

let a = 10, b = 20, c = 30;

if(a>b)
{ 
    if(a>c)
    {
        console.log("Larger Number is :",a);
    } 
    else
    {
        console.log("Large Number is :",c); 
    }     
}
else
{
    if(b>c)
    {
        console.log("Largest Number is :",b);
    } 
    else
    {
        console.log("Large Number is :",c); 
    }    
}

// Nested Statement => Find Larger Number

let x = 10, y = 20, z = 30;

if(x<y)
{ 
    if(x<z)
    {
        console.log("Smaller Number is :",x);
    } 
    else
    {
        console.log("Smaller Number is :",z); 
    }     
}
else
{
    if(y<z)
    {
        console.log("Smallest Number is :",y);
    } 
    else
    {
        console.log("Smaller Number is :",z); 
    }    
}

// Ladder Statement => Find Smaller Number

let p = 10, q = 20, r = 30;

if(p<q && p<r)
{ 
    console.log("Small Number is :",p);    
}
else if(q<r)
{
    console.log("Smallest Number is :",q);    
}
else
{
    console.log("Smaller Number is :",r); 
} 

// Ladder Statement => Find Large Number

let i = 10, j = 20, k = 30;

if(i>j && i>k)
{ 
    console.log("Larger Number is :",i);    
}
else if(j>k)
{
    console.log("Largest Number is :",j);    
}
else
{
    console.log("Large Number is :",k); 
} 