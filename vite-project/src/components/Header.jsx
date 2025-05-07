import React, { PureComponent } from 'react'

class Header extends PureComponent {
    
    render() {
        return (
            <div class="bg-fucsia-300 py-2.5">
                <div className='bg-white'>
                <a href='/' className='text-2xl'>Главная </a>
                <a href='/blog' className='text-2xl'>Блог </a>
                <a href='/about' className='text-2xl'> О нас </a>
                </div>
            </div>
        )
    }
}

export default Header