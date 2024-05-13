function solution() {

    class Post {

        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
        }
        comments = [];

        addComment(comm) {
            this.comments.push(comm);
        }
        toString() {

            let template = `Comments:\n${this.comments.join('\n')}`;
            return `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}\n${this.comments.length == 0 ? '' : template}`;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            
            return this.views++;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\n${this.views}`;
        }
    }
    

    return { Post, SocialMediaPost, BlogPost }
}

const classes = solution();

let post = new classes.Post("Post", "Content");

console.log(post.toString());


let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");

scm.addComment("Very good post");

scm.addComment("Wow!");

console.log(scm.toString());


let blog = new classes.BlogPost('It Works', 'Nothing', 5);
console.log(blog.view());
console.log(blog.toString());