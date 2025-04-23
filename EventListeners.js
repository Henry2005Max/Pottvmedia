// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Render all content
renderFeaturedProjects();
renderVideos();
renderRecommendedVideos();
renderNewsItems();
renderBTSFootage();
renderDirectorInsights();
renderProductionTechniques();
// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
mobileMenuButton.addEventListener('click', function() {
mobileMenu.classList.toggle('hidden');
});
// Video Modal
const videoModal = document.getElementById('videoModal');
const videoIframe = document.getElementById('videoIframe');
const closeVideoModal = document.getElementById('closeVideoModal');
document.addEventListener('click', function(e) {
if (e.target.closest('.play-button') || e.target.closest('[data-video]')) {
const videoUrl = e.target.closest('[data-video]').getAttribute('data-video');
videoIframe.src = videoUrl;
videoModal.classList.add('active');
document.body.style.overflow = 'hidden';
}
});
closeVideoModal.addEventListener('click', function() {
videoModal.classList.remove('active');
videoIframe.src = '';
document.body.style.overflow = '';
});
// News Modal
const newsModal = document.getElementById('newsModal');
const newsTitle = document.getElementById('newsTitle');
const newsDate = document.getElementById('newsDate');
const newsCategory = document.getElementById('newsCategory');
const newsContent = document.getElementById('newsContent');
const closeNewsModal = document.getElementById('closeNewsModal');
document.addEventListener('click', function(e) {
if (e.target.closest('.read-more-btn')) {
const newsId = parseInt(e.target.closest('.read-more-btn').getAttribute('data-news-id'));
const newsItem = newsItems.find(item => item.id === newsId);
newsTitle.textContent = newsItem.title;
newsDate.textContent = newsItem.date;
newsCategory.textContent = newsItem.category;
newsContent.innerHTML = newsItem.content;
newsModal.classList.add('active');
document.body.style.overflow = 'hidden';
}
});
closeNewsModal.addEventListener('click', function() {
newsModal.classList.remove('active');
document.body.style.overflow = '';
});
// Thank You Modal
const contactForm = document.getElementById('contactForm');
const thankYouModal = document.getElementById('thankYouModal');
const closeThankYouModal = document.getElementById('closeThankYouModal');
const returnHome = document.getElementById('returnHome');
contactForm.addEventListener('submit', function(e) {
e.preventDefault();
thankYouModal.classList.add('active');
document.body.style.overflow = 'hidden';
contactForm.reset();
});
closeThankYouModal.addEventListener('click', function() {
thankYouModal.classList.remove('active');
document.body.style.overflow = '';
});
returnHome.addEventListener('click', function() {
thankYouModal.classList.remove('active');
document.body.style.overflow = '';
window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Video Filters
const filterButtons = document.querySelectorAll('#videoFilters button');
filterButtons.forEach(button => {
button.addEventListener('click', function() {
const filter = this.getAttribute('data-filter');
// Update active button
filterButtons.forEach(btn => {
btn.classList.remove('bg-primary', 'text-white');
btn.classList.add('bg-white', 'text-gray-700', 'hover:bg-gray-100');
});
this.classList.remove('bg-white', 'text-gray-700', 'hover:bg-gray-100');
this.classList.add('bg-primary', 'text-white');
// Filter videos
const videoCards = document.querySelectorAll('#videoGrid .video-card');
videoCards.forEach(card => {
if (filter === 'all' || card.classList.contains(filter)) {
card.style.display = 'block';
} else {
card.style.display = 'none';
}
});
});
});
// Behind-the-Scenes Tabs
const tabButtons = document.querySelectorAll('[data-tab]');
const tabContents = document.querySelectorAll('.tab-content');
tabButtons.forEach(button => {
button.addEventListener('click', function() {
const tab = this.getAttribute('data-tab');
// Update active button
tabButtons.forEach(btn => {
btn.classList.remove('text-primary', 'border-primary');
btn.classList.add('text-gray-500', 'hover:text-gray-700');
});
this.classList.remove('text-gray-500', 'hover:text-gray-700');
this.classList.add('text-primary', 'border-primary');
// Show active content
tabContents.forEach(content => {
content.classList.add('hidden');
});
document.getElementById(`${tab}Content`).classList.remove('hidden');
});
});
// Carousel Navigation
const prevProject = document.getElementById('prevProject');
const nextProject = document.getElementById('nextProject');
const featuredProjectsContainer = document.getElementById('featuredProjects');
prevProject.addEventListener('click', function() {
featuredProjectsContainer.scrollBy({ left: -520, behavior: 'smooth' });
});
nextProject.addEventListener('click', function() {
featuredProjectsContainer.scrollBy({ left: 520, behavior: 'smooth' });
});
// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('change', function() {
if (this.checked) {
document.documentElement.classList.add('dark');
} else {
document.documentElement.classList.remove('dark');
}
});
// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
if (targetId === '#') return;
const targetElement = document.querySelector(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - 80,
behavior: 'smooth'
});
// Close mobile menu if open
if (!mobileMenu.classList.contains('hidden')) {
mobileMenu.classList.add('hidden');
}
}
});
});
});