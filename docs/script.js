// Sidebar toggle
function toggleSidebar() {
  document.body.classList.toggle('sidebar-collapsed');
  localStorage.setItem('sidebarCollapsed', document.body.classList.contains('sidebar-collapsed'));
}

// Restore sidebar state on load
(function() {
  var saved = localStorage.getItem('sidebarCollapsed');
  if (saved === 'true' || (saved === null && window.innerWidth <= 768)) {
    document.body.classList.add('sidebar-collapsed');
  }
})();
