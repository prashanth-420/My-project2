# include<stdio.h>
# include<string.h>
int main()
{
    char str1[100],str2[100];
    printf("Enter first string");
    scanf("%s",str1);
    printf("enter second string");
    scanf("%s",str2);
    int result = strcmp(str1,str2);
    if(result ==0)
    {
        printf("both strings are equal.\n");
    }
    else if(result<0)
    {
        printf("First string is less than second string.\n");
    }
    else
    {
        printf("first string is greater than the second string.\n");
    }
    return 0;
}