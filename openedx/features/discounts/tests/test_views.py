"""Tests of openedx.features.discounts.views"""
# -*- coding: utf-8 -*-
import jwt

from django.test.client import Client

from xmodule.modulestore.tests.factories import CourseFactory
from xmodule.modulestore.tests.django_utils import ModuleStoreTestCase
from student.tests.factories import UserFactory
from rest_framework.test import APIRequestFactory

from openedx.features.discounts.views import CourseUserDiscount


class TestCourseUserDiscount(ModuleStoreTestCase):
    """
    CourseUserDiscount should return a jwt with the information if this combination of user and
    course can receive a discount, and how much that discount should be.
    """

    def setUp(self):
        super(TestCourseUserDiscount, self).setUp()
        self.user = UserFactory.create()
        self.course = CourseFactory.create(run='test', display_name='test')
        self.client = Client()
        self.client.login(username=self.user.username, password='test')

    def test_course_user_discount(self):
        """
        Test that the api returns a jwt with the discount information
        """
        import pdb; pdb.set_trace()
        response = self.client.get(reverse('course_user_discount', args=[self.course.id.course]))
        assert response.status_code == 200

        expected_payload = {'discount_applicable': False, 'discount_percent': 15}
        assert expected_payload['discount_applicable'] == response.data['discount_applicable']
        response_payload = jwt.decode(response.data['jwt'], verify=False)
        assert all(item in response_payload.items() for item in expected_payload.items())
