// Learncare Academy - Shared JavaScript

// Add to Cart (used in index.html)
function addToCart(courseId, courseName, price) {
    showToast(`${courseName} added to cart!`);

    // Update cart count if exists
    let cartCount = document.getElementById('cart-count');
    
    if (cartCount) {
        let count = parseInt(cartCount.innerText) || 0;
        cartCount.innerText = count + 1;
    } else {
        // Create floating cart icon
        const navRight = document.querySelector('nav .flex.items-center.gap-x-3');
        if (navRight) {
            const cartWrapper = document.createElement('div');
            cartWrapper.className = 'relative flex items-center justify-center cursor-pointer px-1';
            cartWrapper.innerHTML = `
                <i class="fas fa-shopping-cart text-xl text-gray-600"></i>
                <div id="cart-count" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">1</div>
            `;
            navRight.appendChild(cartWrapper);
        }
    }
}

// Show Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    const toastText = document.getElementById('toast-text');
    if (toastText) toastText.innerHTML = message;

    toast.style.display = 'flex';
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.style.transition = 'all 0.3s ease';
        toast.style.opacity = '0';
        
        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transition = '';
            toast.style.display = 'none';
            toast.classList.add('hidden');
        }, 300);
    }, 3200);
}

// Login Handler (login.html)
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        alert("Please enter email and password");
        return;
    }
    
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = `<span class="flex items-center justify-center gap-x-2"><i class="fas fa-spinner fa-spin"></i> Signing in...</span>`;
    btn.disabled = true;
    
    setTimeout(function() {
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        // Show success toast
        const toastContainer = document.getElementById('success-toast');
        if (toastContainer) {
            const msg = document.getElementById('toast-message');
            msg.innerHTML = `Welcome back! Logged in as ${email}`;
            toastContainer.style.display = 'flex';
            toastContainer.classList.remove('hidden');
        }
        
        setTimeout(function() {
            window.location.href = "index.html";
        }, 1600);
    }, 1500);
}

// Toggle password visibility (login.html)
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const icon = document.getElementById('password-icon');
    
    if (!passwordInput || !icon) return;
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Social Login
function socialLogin(provider) {
    const buttons = document.querySelectorAll('.grid-cols-2 button');
    
    buttons.forEach(btn => btn.disabled = true);
    
    const originalTexts = [];
    buttons.forEach((btn, index) => {
        originalTexts[index] = btn.innerHTML;
        btn.innerHTML = `<span class="flex items-center justify-center gap-x-2"><i class="fas fa-spinner fa-spin"></i> Connecting...</span>`;
    });
    
    setTimeout(() => {
        buttons.forEach((btn, index) => {
            btn.innerHTML = originalTexts[index];
            btn.disabled = false;
        });
        
        const toastContainer = document.getElementById('success-toast');
        if (toastContainer) {
            const msg = document.getElementById('toast-message');
            msg.innerHTML = `Successfully logged in with ${provider}`;
            toastContainer.style.display = 'flex';
            toastContainer.classList.remove('hidden');
        }
        
        setTimeout(function() {
            window.location.href = "index.html";
        }, 1400);
    }, 1600);
}

// Register Handler (register.html)
function handleRegister(e) {
    e.preventDefault();
    
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = `<span class="flex justify-center items-center gap-x-2"><i class="fas fa-spinner fa-spin"></i> Creating account...</span>`;
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        const toastContainer = document.getElementById('success-toast');
        if (toastContainer) {
            const msg = document.getElementById('toast-message');
            msg.innerHTML = "Account created successfully! Please log in.";
            toastContainer.style.display = 'flex';
            toastContainer.classList.remove('hidden');
        }
        
        setTimeout(function() {
            window.location.href = "login.html";
        }, 1700);
    }, 1600);
}

// Toggle password in register page
function togglePasswordRegister() {
    const passwordInput = document.getElementById('reg-password');
    const icon = document.getElementById('reg-password-icon');
    
    if (!passwordInput || !icon) return;
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Mobile Menu (index.html)
function setupMobileMenu() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    if (!mobileBtn) return;
    
    mobileBtn.addEventListener('click', () => {
        const menu = document.createElement('div');
        menu.className = `md:hidden fixed inset-0 bg-white z-50 px-6 py-6`;
        menu.innerHTML = `
            <div class="flex justify-between items-center mb-8">
                <div class="flex items-center gap-x-3">
                    <div class="w-9 h-9 bg-teal-800 rounded-2xl flex items-center justify-center">
                        <span class="text-white text-2xl font-bold">LC</span>
                    </div>
                    <span class="font-bold text-2xl">Learncare</span>
                </div>
                <button class="text-3xl text-gray-400">&times;</button>
            </div>
            
            <div class="flex flex-col text-lg font-medium space-y-1">
                <a href="index.html" class="py-3 px-2 hover:bg-gray-100 rounded-2xl">হোম</a>
                <a href="#courses" class="py-3 px-2 hover:bg-gray-100 rounded-2xl">কোর্সসমূহ</a>
                <a href="#why-us" class="py-3 px-2 hover:bg-gray-100 rounded-2xl">কেন আমাদের?</a>
                <a href="#" class="py-3 px-2 hover:bg-gray-100 rounded-2xl">অক্সফোর্ড ৩০০০</a>
            </div>
            
            <div class="mt-auto pt-8 border-t">
                <a href="login.html" class="block w-full text-center py-3.5 bg-teal-700 text-white font-semibold rounded-2xl">লগইন</a>
            </div>
        `;
        
        document.body.appendChild(menu);
        
        menu.querySelector('button').onclick = () => {
            menu.remove();
        };
    });
}

// Initialize page-specific functions
function init() {
    // Initialize mobile menu only on index page
    if (document.getElementById('mobile-menu-btn')) {
        setupMobileMenu();
    }
    
    // Auto focus email on login page
    const emailField = document.getElementById('email');
    if (emailField) {
        setTimeout(() => {
            emailField.focus();
        }, 800);
    }
    
    console.log('%c[Learncare Academy] All pages initialized successfully.', 'color:#166534');
}

// Run initialization
window.onload = init;