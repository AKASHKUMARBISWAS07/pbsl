1. Find the Smaller Angle

ans:

var Minimal_Angle = (h, m) => 
{
  if(h==12 && m==0){
    return 0}
  let ma=m*6 ;
  let ha=h*30 + m*0.5 ;
  if(ha>ma)return(ha-ma);
  else return(ma-ha);
};
 
2. Check whether the year is Leap year or not.

ans:

var Check_Leap = (year) => 
{
 if((year%4==0)&&(year%100!=0)||(year%400==0))
 {
   return ("Leap Year");
 }
  else
  {
    return ("Non Leap Year");
  }
};
 

3. Perfect Number Check.
ans:

 
var Perfect_Check = (N) => 
{
 let total=0;
  if(N==1){
  return ("YES");
  }
  else{
  for(let i = 1; i < N; i++)
  {
  if(N%i == 0){
    total += i;
  }
  if(total==N){
    return ("YES");
  }
  else{ 
  return ("NO");}
  }
}
};


4.Reverse a Number.

ans:
 
var Reverse_Number = (N) => 
{
 return Number(String(N).split("").reverse().join(""));
};
 

5. Substring Check.

ans:

var Substring_Check = (S1, S2) => 
{
 let s=S1.split(" ");
  let ak;
  for(let i=0; i < s.length; i++)
  {if(s[i]==S2)ak=true}
  if(ak){
    return ("YES");
  }
  else{
    return ("NO");
  }
};
 
