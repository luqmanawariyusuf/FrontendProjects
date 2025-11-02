// ✅ Real, working blog posts from reputable sources
const blogPosts = [
  {
    id: 1,
    title: "The State of AI in Early 2024: Gen AI Adoption Spikes and Starts to Generate Value",
    comment: "Explores how businesses are using generative AI for growth.",
    description: "McKinsey outlines how generative AI adoption is surging and organizations are deriving measurable business value.",
    date: "2024-05-30",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2024"
  },
  {
    id: 2,
    title: "VCs on How to ‘Survive and Thrive’ After a Down Round",
    comment: "Practical tips for startups navigating tougher funding climates.",
    description: "TechCrunch article on how founders can adapt to lower valuations and rebuild investor confidence.",
    date: "2024-11-09",
    url: "https://techcrunch.com/2024/11/09/vcs-on-how-to-survive-and-thrive-after-a-down-round/"
  },
  {
    id: 3,
    title: "How Fintech Startups Can Outlast the VC Winter",
    comment: "A must-read for fintech founders, especially in emerging markets.",
    description: "Explores strategies fintech founders can use to survive in a global funding slowdown.",
    date: "2023-01-09",
    url: "https://techcrunch.com/2023/01/09/how-can-fintech-startups-outlast-the-vc-winter/"
  },
  {
    id: 4,
    title: "Building AI Trust: The Key Role of Explainability",
    comment: "Great insight on AI transparency and risk management.",
    description: "McKinsey discusses how explainability helps organizations build user trust and regulatory confidence in AI systems.",
    date: "2024-11-15",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/building-ai-trust-the-key-role-of-explainability"
  },
  {
    id: 5,
    title: "How Foreign Governments and Big Tech Are Racing to Shape Africa’s AI Future",
    comment: "Explores how AI investments in Africa are shifting power and influence.",
    description: "TechCabal article analyzing how international partnerships and Big Tech are shaping Africa’s AI landscape.",
    date: "2025-09-04",
    url: "https://techcabal.com/2025/09/04/africa-ai-foreign-investment-bigtech-sovereignty/"
  }
];

// ✅ Function to display posts using map()
const displayPosts = (posts) => {
  const container = document.getElementById("blogContainer");
  container.innerHTML = posts.map(post => `
    <div class="blog-post">
      <h2>${post.title}</h2>
      <p><strong>Date:</strong> ${post.date}</p>
      <p>${post.description}</p>
      <p><em>${post.comment}</em></p>
      <a href="${post.url}" target="_blank">Read full article →</a>
    </div>
  `).join('');
};

// ✅ Filter posts by keyword
document.getElementById("search").addEventListener("input", (e) => {
  const keyword = e.target.value.toLowerCase();
  const filtered = blogPosts.filter(post =>
    post.title.toLowerCase().includes(keyword) ||
    post.description.toLowerCase().includes(keyword) ||
    post.comment.toLowerCase().includes(keyword)
  );
  displayPosts(filtered);
});

// ✅ Initial render
displayPosts(blogPosts);
