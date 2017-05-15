/**
 * A basic hello-world Angular 2 app
 */
import {
    NgModule,
    Component
} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

@Component({
    selector: 'reddit',
    template: `
     <form class="ui large form segment">
      <h3 class="ui header">add a link</h3>
      <div class="field">
        <label for="title">title:</label>
        <input name="title" #newtitle>
      </div>
      <div class="field">
        <label for="link">link:</label>
        <input name="link" #newlink>
      </div>
           <button (click)="addArticle(newtitle, newlink)"
              class="ui positive right floated button">
        submit link
      </button>
</form>

  `
})
class RedditApp {
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
        console.log(`Adding 1an article title: ${title.value} and link: ${link.value}`);
        return false;
    }}

    @NgModule({
        declarations: [RedditApp],
        imports: [BrowserModule],
        bootstrap: [RedditApp]
    })

    class RedditAppModule {}

platformBrowserDynamic().bootstrapModule(RedditAppModule);
