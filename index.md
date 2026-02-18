---
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/style.css">

<div class="topBar">
  <div class="topNav">
    <div class="topLeft">
      <a class="topBrand" href="#top">{{ site.title }}</a>
    </div>
    <div class="topRight">
      <a class="topLink" href="https://www.hadash-holon.org.il/" target="_blank" rel="noopener">Campus Peres high school</a>
      <a class="topLink" href="https://sites.google.com/hadash-holon.org.il/arcade01/%D7%A2%D7%9E%D7%95%D7%93-%D7%94%D7%91%D7%99%D7%AA" target="_blank" rel="noopener">Game Design</a>
    </div>
  </div>
</div>

<div class="page" id="top">

  <section class="posts" id="posts">
    <p style="opacity:.7">Posts count: {{ site.posts | size }}</p>

    {% for post in site.posts %}
      <article class="post">
        <header class="postHead">
          <h3 class="postTitle">{{ post.title }}</h3>
          {% if post.subtitle %}<p class="postLead">{{ post.subtitle }}</p>{% endif %}
        </header>

        {% if post.how_title or post.how_text %}
        <div class="how">
          <h4 class="howTitle">{{ post.how_title | default: "How it works" }}</h4>
          {% if post.how_text %}<p class="howText">{{ post.how_text }}</p>{% endif %}
        </div>
        {% endif %}

        {% if post.images %}
        <div class="mediaGrid">
          {% for img in post.images %}
            <figure class="mediaItem">
              <img src="{{ site.baseurl }}/{{ img }}" alt="" loading="lazy">
            </figure>
          {% endfor %}
        </div>
        {% endif %}

        {% if post.canva_embed %}
        <div class="embed">
          <div class="embedFrame">
            <iframe src="{{ post.canva_embed }}" loading="lazy" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>
          </div>
        </div>
        {% endif %}
      </article>
    {% endfor %}
  </section>

</div>
