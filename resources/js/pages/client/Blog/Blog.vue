<template>
    <section class="page-section blog-section">
        <div class="blog-news">
            <div
                v-for="(blog, index) in paginatedBlogs"
                :key="index"
                class="blog-item"
            >
                <img v-bind:src="blog.image_path" />
                <h3 class="blog-item-title g-text">{{ blog.title }}</h3>
                <hr class="underline-blog g-item" />
                <p>{{ blog.content | deleteHtmlTags | truncateFilter(50) }}</p>
                <div class="blog-info">
                    <i
                        v-if="blog.updated_at"
                        class="fa fa-calendar g-text"
                        aria-hidden="true"
                    ></i>
                    <span v-if="blog.created_at">{{
                        $moment(blog.created_at).format("l")
                    }}</span>

                    <i class="fa fa-user g-text" aria-hidden="true"></i>
                    <span>{{ blog.author }}</span>
                    <i class="fa fa-tag g-text" aria-hidden="true"></i>

                    <span class="blog-item-category">{{
                        categories[blog.category_id - 1].name
                    }}</span>
                </div>
                <router-link
                    :to="{ name: 'BlogDetail', params: { blogId: blog.id } }"
                    class="btn-lg btn-primary hvr-back-pulse"
                    >Read More</router-link
                >
            </div>
            <div class="pagination">
                <button
                    class="btn-lg btn-primary"
                    v-if="currentPage > 1"
                    @click="prevPage()"
                >
                    Previous
                </button>
                <button
                    v-if="totalPages > 1"
                    @click="pageSwitcher(number)"
                    v-for="number in totalPages"
                    class="btn-primary"
                    :class="{ 'active-page': currentPage == number }"
                >
                    {{ number }}
                </button>
                <button
                    class="btn-lg btn-primary"
                    v-if="currentPage < totalPages"
                    @click="nextPage()"
                >
                    Next
                </button>
            </div>
        </div>
        <div class="blog-tabs">
            <div class="blog-tab-container">
                <div class="blog-search-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        v-model="searchKeyword"
                    />
                    <span>
                        <button>
                            <i class="fa fa-search"></i>
                        </button>
                    </span>
                </div>

                <div class="blog-category-list">
                    <h3 class="g-text blog-category-title">
                        {{ $t("blog-title") }}
                    </h3>
                    <div
                        v-for="category in categories"
                        class="blog-category-item"
                    >
                        <div
                            @click="categorySwitcher(category.id)"
                            class="category-click"
                        >
                            <i
                                v-if="category.id != activeFilter"
                                class="fa fa-caret-right"
                            ></i>
                            <span>{{ category.name }}</span>
                        </div>
                        <i
                            v-if="category.id == activeFilter"
                            @click="categoryReset"
                            class="fa fa-window-close"
                        ></i>
                    </div>
                </div>
                <hr class="g-item blog-break-line" />
                <div class="recent-post-list">
                    <h3 class="g-text">{{ $t("blog-recent-title") }}</h3>
                    <router-link
                        :to="{
                            name: 'BlogDetail',
                            params: { blogId: recentBlog.id }
                        }"
                        tag="div"
                        v-for="recentBlog in recentBlogs"
                        :key="recentBlog.id"
                        class="post-list-item"
                    >
                        <img src="http://placehold.it/50x50" alt />
                        <p>{{ recentBlog.title }}</p>
                    </router-link>
                </div>
                <hr class="g-item blog-break-line" />
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    created() {
        this.setTotalPages();
    },
    computed: {
        ...mapGetters(["recentBlogs", "categories", "blogs"]),

        filteredBlogs() {
            var vm = this;
            if (vm.activeFilter > 0) {
                let filtereddata = this.blogs.filter(
                    p => p.category_id == vm.activeFilter
                );
                let filteredreversedata = filtereddata.reverse();
                let searchedandfiltered = filteredreversedata.filter(p =>
                    p.content.includes(vm.searchKeyword)
                );
                return searchedandfiltered;
            } else {
                let searchedandfiltered = this.blogs.filter(p =>
                    p.content.includes(vm.searchKeyword)
                );
                return searchedandfiltered.reverse();
            }
        },
        paginatedBlogs() {
            var vm = this;
            let start = (this.currentPage - 1) * this.itemPerPage,
                end = start + this.itemPerPage;
            let paginatedBlog = this.filteredBlogs.slice(start, end);
            return paginatedBlog;
        }
    },
    data() {
        return {
            totalPages: [],
            itemPerPage: 3,
            currentPage: 1,
            activeFilter: 0,
            searchKeyword: ""
        };
    },
    watch: {
        filteredBlogs() {
            this.setTotalPages();
        }
    },

    methods: {
        setTotalPages() {
            var vm = this;
            vm.totalPages = Math.ceil(vm.filteredBlogs.length / vm.itemPerPage);
        },
        nextPage() {
            this.currentPage++;
        },
        prevPage() {
            this.currentPage--;
        },

        pageSwitcher(pagenum) {
            this.currentPage = pagenum;
        },
        categorySwitcher(num) {
            this.activeFilter = num;
        },
        categoryReset() {
            this.activeFilter = 0;
        }
    },
    metaInfo: {
        titleTemplate: "%s | Blog ",
        meta: [
            { name: "description", content: "Page Description" },
            { name: "robots", content: "index, follow" }
        ]
    }
};
</script>

<style>
.pagination {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-items: end;
}

.blog-section {
    display: grid;
    grid: 1fr 1fr / auto;
    row-gap: 20px;
    background-color: white;
    min-height: 90vh;
}
.blog-news {
    display: grid;
}
.blog-item {
    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
    word-wrap: break-word;
    row-gap: 20px;
}
.blog-item img {
    width: 300px;
    height: 150px;
}
.blog-item-title {
    text-transform: uppercase;
}

.underline-blog {
    height: 4px;
    width: 20%;
}

.blog-tabs {
    display: grid;
    grid-row: 1/-1;
    background-color: white;
}
.blog-tabs h3 {
    font-size: 30px;
}
.blog-tabs .minimize {
    display: grid;
    color: green;
}

.blog-tabs input {
    border: none;
    width: 84%;
    height: 50px;
    border-color: green;
    color: green;
    font-size: 16px;
    border-bottom: 2px solid green;
}
.blog-tabs button {
    width: 15%;
    height: 50px;
    border-color: var(--gradient-color2);
    color: white;
    background-color: var(--gradient-color2);
}

.recent-post-list {
    display: grid;
    grid-auto-flow: column;
    row-gap: 5vh;
    align-items: center;
    align-content: center;
}

.post-list-item {
    display: grid;
    align-items: center;
    grid: auto / auto auto;
    cursor: pointer;
}

.post-list-item p {
    color: green;
    font-weight: 600;
}

.blog-category-list {
    display: grid;
    row-gap: 5px;
    color: green;
    font-size: 18px;
    grid-auto-flow: column;
}
.blog-category-item {
    text-transform: uppercase;
    cursor: pointer;
}

.blog-item-category {
    text-transform: capitalize;
}

.active-page {
    background-color: var(--gradient-color2);
    color: white;
}

.category-click {
    display: inline;
}
.blog-break-line {
    color: green;
    height: 2px;
}
.blog-tab-container {
    display: grid;
    row-gap: 25px;
}

/* MOBILE START */
@media (max-width: 767.98px) {
    .blog-section {
        grid: 1fr 1fr / auto;
        row-gap: 20px;
    }
    .blog-tabs {
        grid-column: initial;
    }
    .recent-post-list {
        justify-content: center;
    }
    .blog-category-list {
        grid-auto-flow: column;
        justify-items: center;
    }
    .blog-category-title {
        text-align: center;
    }
    .post-list-item {
        column-gap: 10px;
    }
    .blog-tab-container {
        display: grid;
        row-gap: 25px;
    }
}
/* MOBILE END */
/* TABLET START */
/* TABLET END */
</style>
