document.addEventListener('DOMContentLoaded', () => {
  // 表单提交处理
  const form = document.querySelector('.signup-form form');
  
  form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = {
          username: form.querySelector('input[type="text"]').value,
          email: form.querySelector('input[type="email"]').value,
          password: form.querySelector('input[type="password"]').value
      };

      try {
          const response = await fetch('/api/register', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData)
          });
          
          if (!response.ok) throw await response.json();
          
          alert('注册成功！');
          form.reset();
      } catch (error) {
          alert(error.error || '注册失败');
      }
  });

  // 移动端导航切换
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
          navbar.style.backgroundColor = '#222';
      } else {
          navbar.style.backgroundColor = '#333';
      }
  });
});