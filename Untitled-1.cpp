#include<iostream>
using namespace std;

 int addvalue(int x, int y){
    int c=x+y;
    return c;
}
int main(){
    int x,y;
    cin>>x>>y;
    int c = addvalue(x,y);
    cout<<c;
    

}
