import {error} from '@sveltejs/kit';

export async function load({fetch, params}) {
    try {
        const response = await fetch('/api/posts');
        let posts = await response.json();
        posts = posts.filter(post => 
            post.categories.includes(params.category) && post.published
        );

        return {posts};
    } catch(e) {
        throw error(404, `Could not find category ${params.category}`);
    }
}
