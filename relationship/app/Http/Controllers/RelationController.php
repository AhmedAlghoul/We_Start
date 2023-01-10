<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;

class RelationController extends Controller
{
    public function one_to_one()
    {
        // $user=User::find(2);
        // dd($user->profile);

        // $profile= Profile::where('user_id',$user->id)->first();
        // $profile = Profile::find(1);
        // dd($profile->user);

        $users = User::with('profile')->get();

    //     $users = User::find(2);

    //    $users->profile()->create([
    //     'image'=>'dddd',
    //     'dob' => '10-10-10 10:20:10',
    //     'fb' => 'www'

    //    ]);

        return view('one_to_one', compact('users'));
    }

    public function one_to_many()
    {
        $post= Post::with('comments.user')->withCount('comments')->find(1);
        // dd($post->comments);

        // $comment = Comment::find(1);
        // dd($comment->user);

        // return $post;
        return view('one_to_many',compact('post'));
    }
}
