import { Controller, Get, Render } from '@nestjs/common';

class PostDto {
  id: number
  topic: string
  user?: string
  message?: string
  comments?: string
}

@Controller()
export class PostsController {
  @Get('inquiry')
  @Render('posts/index')
  inquiry(): { isTopicInquiry: boolean, posts: PostDto[] } {
    return {
      isTopicInquiry: true,
      posts: [
        {
          id: 1,
          topic: 'inquiry',
          message: 'The CatsController and CatsService belong to the same application domain. As they are closely related, it makes sense to move them into a feature module. A feature module simply organizes code relevant for a specific feature, keeping code organized and establishing clear boundaries. This helps us manage complexity and develop with SOLID principles, especially as the size of the application and/or team grow.',
        },
        {
          id: 2,
          topic: 'inquiry',
          message: 'The CatsController and CatsService belong to the same application domain. As they are closely related, it makes sense to move them into a feature module. A feature module simply organizes code relevant for a specific feature, keeping code organized and establishing clear boundaries. This helps us manage complexity and develop with SOLID principles, especially as the size of the application and/or team grow.',
        },
        {
          id: 3,
          topic: 'inquiry',
          message: 'The CatsController and CatsService belong to the same application domain. As they are closely related, it makes sense to move them into a feature module. A feature module simply organizes code relevant for a specific feature, keeping code organized and establishing clear boundaries. This helps us manage complexity and develop with SOLID principles, especially as the size of the application and/or team grow.',
        },
      ],
    };
  }

  @Get('notice')
  @Render('posts/index')
  notice(): { isTopicInquiry: boolean, posts: PostDto[] } {
    return {
      isTopicInquiry: false,
      posts: [
        {
          id: 1,
          topic: 'inquiry',
          message: 'The CatsController and CatsService belong to the same application domain. As they are closely related, it makes sense to move them into a feature module. A feature module simply organizes code relevant for a specific feature, keeping code organized and establishing clear boundaries. This helps us manage complexity and develop with SOLID principles, especially as the size of the application and/or team grow.',
        },
        {
          id: 2,
          topic: 'inquiry',
          message: 'The CatsController and CatsService belong to the same application domain. As they are closely related, it makes sense to move them into a feature module. A feature module simply organizes code relevant for a specific feature, keeping code organized and establishing clear boundaries. This helps us manage complexity and develop with SOLID principles, especially as the size of the application and/or team grow.',
        },
        {
          id: 3,
          topic: 'inquiry',
          message: 'The CatsController and CatsService belong to the same application domain. As they are closely related, it makes sense to move them into a feature module. A feature module simply organizes code relevant for a specific feature, keeping code organized and establishing clear boundaries. This helps us manage complexity and develop with SOLID principles, especially as the size of the application and/or team grow.',
        },
      ],
    };
  }

  @Get('posts/:id')
  @Render('posts/show')
  show(): { post: PostDto } {
    return {
      post:
        {
          id: 1,
          topic: 'inquiry',
          message: 'The CatsController and CatsService belong to the same application domain. As they are closely related, it makes sense to move them into a feature module. A feature module simply organizes code relevant for a specific feature, keeping code organized and establishing clear boundaries. This helps us manage complexity and develop with SOLID principles, especially as the size of the application and/or team grow.',
        },
    };
  }

}