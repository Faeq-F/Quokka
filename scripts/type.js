var typed = new Typed(".auto-type", {
  strings: [
    `public class ListNode{<br/>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;private string payload;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;private ListNode next;<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;public ListNode(string payload, ListNode next){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.payload = payload;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.next = next;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;public getPayload(){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this.payload;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;public setPayload(string payload){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.payload = payload;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;public getNext(){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this.next;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;public setNext(ListNode next){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.next = next;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    <br>
    }
    `,
    `using System;<br>
    using System.Collections.Generic;<br>
    using System.Linq;<br>
    using System.Text;<br>
    using System.Threading.Tasks;<br>
    using System.Windows.Media;<br>
    <br>
    namespace Quokka{<br>
    &nbsp;&nbsp;&nbsp;&nbsp;public class SystemApp{<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public string name;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public string appUserModelID;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public ImageSource icon;<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public SystemApp(string name, string appUserModelID, ImageSource icon){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name = name;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.appUserModelID = appUserModelID;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.icon = icon;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public void executeApp(){<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.Diagnostics.Process.Start("explorer.exe", @" shell:appsFolder\" + appUserModelID);<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public override string ToString() {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return name;<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
    &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    }<br>
    `,
    `
    // traversal using pointers in 2D array<br>
    #include &lt;stdio.h&gt;<br>
    <br>
    void traverseArr(int* arr, int N, int M) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;int i, j;<br>
<br>
  	&nbsp;&nbsp;&nbsp;&nbsp;for (i = 0; i < N; i++) {<br>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (j = 0; j < M; j++) {<br>
	  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("%d ", *((arr + i * M) + j));<br>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;printf("\n");<br>
	  &nbsp;&nbsp;&nbsp;&nbsp;}<br>
    }<br>
<br>
<br>
    int main() {<br>
	  &nbsp;&nbsp;&nbsp;&nbsp;int N = 3, M = 2;<br>
<br>
  	&nbsp;&nbsp;&nbsp;&nbsp;int arr[][2] = { { 1, 2 }, { 3, 4 }, { 5, 6 } };<br>
	&nbsp;&nbsp;&nbsp;&nbsp;traverseArr((int*)arr, N, M);<br>
	&nbsp;&nbsp;&nbsp;&nbsp;return 0;<br>
    }
    `,
  ],
  startDelay: 500,
  typeSpeed: 30,
  backSpeed: 20,
  cursorChar: "\u005f",
  autoInsertCss: true,
  smartBackspace: true,
  backDelay: 1000,
  fadeOut: true,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500,
  loop: true,
  loopCount: Infinity,
  shuffle: true,
});
