#include <stdio.h>
int main() {
    char a[1000],b,c;
    printf("読み込むファイル名を記入してください\n");
    scanf(" %s",a);
    printf("何の文字を何に修復したいのですか？消したい文字->増やしたい文字 の順に書いてください\n");
    scanf(" %c %c",&b,&c);
  FILE *fp = fopen(a,"r");//ファイルをrモードで開く
  if(fp != NULL) {
    // ファイルオープンが成功したら
    char buffer[512];
    //1行ずつbufferに読み込み標準出力へ出力する
    while(fgets(buffer, 512, fp) != NULL) {
        for(int i=0;i<strlen(buffer);i++){
            if(buffer[i]==b)buffer[i]=c;
            printf("%c",buffer[i]);
        }
    }

    // ファイルをクローズする
    fclose(fp);
          printf("\n");
  }
      else printf("Error\n");
}
/*このコードは、本来￥マークを\に直したくて作った。しかし、￥マークが\になる問題は、文字コードの問題ではなくフォントの問題だったため、このコードを使っても意味はなかった。
制作者　大沼優之介*/
